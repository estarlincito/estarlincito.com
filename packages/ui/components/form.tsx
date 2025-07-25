'use client';
import { throwAppError } from '@estarlincito/utils';
import type * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
import { Input } from '@repo/ui/components/input';
import { Label } from '@repo/ui/components/label';
import { Textarea } from '@repo/ui/components/textarea';
import { cn } from '@repo/ui/lib/utils';
import * as React from 'react';
import {
  type Control,
  Controller,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
  FormProvider,
  type Path,
  useFormContext,
  type UseFormReturn,
  useFormState,
} from 'react-hook-form';

const RootForm = FormProvider;

interface FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> {
  name: TName;
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => (
  <FormFieldContext.Provider value={{ name: props.name }}>
    <Controller {...props} />
  </FormFieldContext.Provider>
);

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
    throwAppError('useFormField should be used within <FormField>');
  }

  const { id } = itemContext;

  return {
    formDescriptionId: `${id}-form-item-description`,
    formItemId: `${id}-form-item`,
    formMessageId: `${id}-form-item-message`,
    id,
    name: fieldContext.name,
    ...fieldState,
  };
};

interface FormItemContextValue {
  id: string;
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
);

function FormItem({ className, ...props }: React.ComponentProps<'div'>) {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        className={cn('grid gap-2', className)}
        data-slot='form-item'
        {...props}
      />
    </FormItemContext.Provider>
  );
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField();

  return (
    <Label
      className={cn('data-[error=true]:text-destructive', className)}
      data-error={Boolean(error)}
      data-slot='form-label'
      htmlFor={formItemId}
      {...props}
    />
  );
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={Boolean(error)}
      data-slot='form-control'
      id={formItemId}
      {...props}
    />
  );
}

function FormDescription({ className, ...props }: React.ComponentProps<'p'>) {
  const { formDescriptionId } = useFormField();

  return (
    <p
      className={cn('text-muted-foreground text-sm', className)}
      data-slot='form-description'
      id={formDescriptionId}
      {...props}
    />
  );
}

const Comps = {
  Input,
  Textarea,
} as const;

type CompsType = typeof Comps;
type CompKeys = keyof CompsType;

type FieldProps<T extends FieldValues, K extends CompKeys> = {
  control: Control<T>;
  label?: string;
  name: Path<T>;
  description?: string;
  error: string | undefined;
  variant?: K;
} & Omit<React.ComponentProps<CompsType[K]>, 'name'>;

const Field = <T extends FieldValues, K extends CompKeys = 'Input'>({
  control,
  variant,
  label,
  description,
  name,
  error,
  ...props
}: FieldProps<T, K>) => {
  const Element =
    variant === undefined ? Comps['Input'] : (Comps[variant] as CompsType[K]);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Element
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              {...(props as any)}
              {...field}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          {/* <FormMessage /> */}

          <p
            className={cn('text-destructive text-sm')}
            data-slot='form-message'
          >
            {error}
          </p>
        </FormItem>
      )}
    />
  );
};

interface FormProps<T extends FieldValues>
  extends React.DOMAttributes<HTMLFormElement> {
  submit: (values: T, reset: UseFormReturn<T>['reset']) => Promise<void>;
  form: UseFormReturn<T>;
  className?: string;
}
const Form = <T extends FieldValues>({
  form,
  submit,
  onSubmit,
  className,
  ...props
}: FormProps<T>) => (
  <RootForm {...form}>
    <form
      className={cn('space-y-8', className)}
      onSubmit={
        onSubmit ?? form.handleSubmit((values) => submit(values, form.reset))
      }
      {...props}
    />
  </RootForm>
);

Form.Field = Field;
export { Form };
