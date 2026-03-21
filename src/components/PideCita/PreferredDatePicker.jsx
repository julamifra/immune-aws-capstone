import React from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { es } from 'date-fns/locale/es';

registerLocale('es', es);

export default function PreferredDatePicker({ value, onChange }) {
  const minDate = new Date();
  minDate.setDate(minDate.getDate() + 14);

  const isAllowedDay = (date) => {
    const day = date.getDay();
    // 1 = Lunes, 3 = Miércoles, 5 = Viernes
    return day === 1 || day === 3 || day === 4 || day === 5;
  };

  return (
    <DatePicker
      locale="es"
      selected={value}
      onChange={onChange}
      minDate={minDate}
      filterDate={isAllowedDay}
      dateFormat="dd/MM/yyyy"
      placeholderText="Selecciona una fecha"
      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      wrapperClassName="w-full"
      weekStartsOn={1}
    />
  );
}
