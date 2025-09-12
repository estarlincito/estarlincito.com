/* eslint-disable no-console */
import { type NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  const body = await req.formData();

  const fields = [
    'client-name',
    'client-phone',
    'discount',
    'invoice-date',
    'invoice-details',
    'product-details',
    'subtotal',
    'totaldue',
  ];

  const allFields = fields.reduce(
    (acc, field) => ({ ...acc, [field]: body.get(field) ?? '' }),
    {},
  );

  console.log(allFields);

  return NextResponse.json({});
};
