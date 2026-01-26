'use client'
import React from "react";
import style from "../../../Sass/consultation/FormConsultation.module.scss";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import logo from "../../../../public/assets/LOGO.svg";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpRight } from "lucide-react";
import DatePicker from "./DatePickerInput";
import DatePickerInput from "./DatePickerInput";
import { useTranslation } from "react-i18next";
const FormConsultation = () => {
  const {t} = useTranslation()
  return (
    <div className={style.contactForm}>
      <div className={style.container}>
        <div className={style.form}>
          <Image src={logo} />
          <h2>{t('consultation.formConsultation')}</h2>
          <FieldSet>
            <FieldGroup>
              <div className="grid md:grid-cols-2 gap-4">
                <Field className="gap-4">
                  <FieldLabel htmlFor="city" className={style.label}>
                  {t('consultation.fullName')}
                  </FieldLabel>
                  <div className={style.inputWrapper}>
                    <Input
                      id="city"
                      type="text"
                      placeholder="text here"
                      className={style.text}
                    />
                  </div>
                </Field>
                <Field className="gap-4">
                  <FieldLabel htmlFor="zip" className={style.label}>
                    {t('consultation.email')} *
                  </FieldLabel>
                  <div className={style.inputWrapper}>
                    <Input
                      id="city"
                      type="text"
                      placeholder="text here"
                      className={style.text}
                    />
                  </div>{" "}
                </Field>
              </div>
            </FieldGroup>

            <FieldGroup>
              <Field className="gap-4">
                <FieldLabel htmlFor="city" className={style.label}>
                  {t('consultation.companyName')} *
                </FieldLabel>
                <div className={style.inputWrapper}>
                  <Input
                    id="city"
                    type="text"
                    placeholder="text here"
                    className={style.text}
                  />
                </div>{" "}
              </Field>
            </FieldGroup>


            <FieldGroup>
              <Field className="gap-4">
                <FieldLabel htmlFor="city" className={style.label}>
                  {t('consultation.projectType')} *
                </FieldLabel>
                <div className={style.inputWrapper}>
                  <Select>
                    <SelectTrigger
                      className={`${style.text} ${style.selectTrigger}`}
                    >
                      <SelectValue placeholder="Theme" />
                    </SelectTrigger>

                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Field>
            </FieldGroup>

            <FieldGroup>
  <Field className="gap-4">
    <FieldLabel className={style.label}>
     {t('consultation.date')} *
    </FieldLabel>

    <DatePickerInput />
  </Field>
</FieldGroup>



          </FieldSet>

          <Field>
            <Button type="submit">
             {t('consultation.send')}
              <ArrowUpRight color="#FCFCFC" size={24}/>

            </Button>
          </Field>

        </div>
          <p>

            {t('consultation.des')}
          </p>
      </div>
    </div>
  );
};

export default FormConsultation;
