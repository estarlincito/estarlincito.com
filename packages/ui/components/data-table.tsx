/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@repo/ui/components/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@repo/ui/components/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@repo/ui/components/form';
import { Input } from '@repo/ui/components/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@repo/ui/components/table';
import {
  type ColumnDef,
  type ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  useReactTable,
  type VisibilityState,
} from '@tanstack/react-table';
import { PlusCircleIcon } from 'lucide-react';
import * as React from 'react';
import { type FieldValues, useForm } from 'react-hook-form';
import type { core, ZodObject, ZodString } from 'zod/v4';

export interface DataTableProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
  dialogDescription: string;
  dialogSchema: ZodObject<Record<string, ZodString>, core.$strip>;
  dialogTitle: string;
  dialogClose: string;
  dialogAction: string;
  setData: (...args: any[]) => void;
  resolveField?: Partial<Record<keyof T, (data: T) => any>>;
}

const DataTableDialog = <T,>(props: DataTableProps<T>) => {
  const fields = React.useMemo(
    () =>
      props.columns.reduce(
        // @ts-expect-error
        (acc, { accessorKey, header }) => [
          ...acc,
          ...(accessorKey
            ? [
                {
                  label: header,
                  name: accessorKey,
                },
              ]
            : []),
        ],
        [],
      ) as unknown as {
        label: string;
        name: string;
      }[],
    [props.columns],
  );

  const form = useForm<FieldValues>({
    defaultValues: fields.reduce(
      (acc, { name }) => ({ ...acc, [name]: '' }),
      {},
    ),

    resolver: zodResolver(props.dialogSchema as never),
  });

  const onSubmit = React.useCallback(
    async (values: FieldValues) => {
      const { resolveField } = props;
      const resolved: any = {};

      if (resolveField) {
        for (const field in resolveField) {
          resolved[field] ??= resolveField[field]?.(values as T);
        }
      }
      props.setData([
        ...props.data,
        {
          ...values,
          id: new Date().getTime(),
          ...resolved,
        },
      ]);
      form.reset();
    },
    [form, props],
  );

  return (
    <Dialog>
      <div className='m-2'>
        <DialogTrigger asChild>
          <Button variant='ghost'>
            <PlusCircleIcon />
          </Button>
        </DialogTrigger>

        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>{props.dialogTitle}</DialogTitle>
            <DialogDescription>{props.dialogDescription}</DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <div className='grid gap-4'>
              {fields.map(({ label, name }) => {
                const errorKey = form.formState.errors[name]?.message;

                return (
                  <FormField
                    control={form.control}
                    key={name}
                    name={name}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder=''
                            {...field}
                            className='grid gap-3'
                          />
                        </FormControl>

                        {errorKey && (
                          <FormMessage>
                            {String(errorKey as string)}
                          </FormMessage>
                        )}
                      </FormItem>
                    )}
                  />
                );
              })}
            </div>
          </Form>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant='outline'>{props.dialogClose}</Button>
            </DialogClose>
            <Button onClick={form.handleSubmit(onSubmit)}>
              {props.dialogAction}
            </Button>
          </DialogFooter>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export const DataTable = <T,>(props: DataTableProps<T>) => {
  const { columns, data = [] } = props;

  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const tableOptions = {
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,

    setData: props.setData,
    state: {
      columnFilters,
      columnVisibility,
      rowSelection,
      sorting,
    },
  };

  const table = useReactTable(tableOptions);

  return (
    <div className='w-full'>
      <div className='overflow-hidden rounded-md border'>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length
              ? table.getRowModel().rows.map((row) => (
                  <TableRow
                    data-state={row.getIsSelected() && 'selected'}
                    key={row.id}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              : null}
          </TableBody>
        </Table>

        <DataTableDialog {...props} />
      </div>
    </div>
  );
};

export const useData = <T,>(
  init: T[],
): [T[], React.Dispatch<React.SetStateAction<T[]>>] => {
  const [data, setData] = React.useState(init);

  return [data, setData];
};
