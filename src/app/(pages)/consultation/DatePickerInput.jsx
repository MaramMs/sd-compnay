"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import style from "@/Sass/consultation/FormConsultation.module.scss";

const DatePickerInput = () => {
  const [date, setDate] = React.useState();

  return (
    <div className={style.inputWrapper}>
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            className={`${style.text} ${style.dateTrigger}`}
          >
            {date ? format(date, "PPP") : "Preferred Date"}
            <CalendarIcon className={style.calendarIcon} />
          </button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DatePickerInput;
