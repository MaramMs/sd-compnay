import React from "react";
import style from "../../../Sass/contact.module.scss";
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
const ContactForm = () => {
  return (
    <div className={style.contactForm}>
      <div className={style.container}>
        <div className={style.form}>
          <Image src={logo} />
          <h2>Contact Us</h2>
          <FieldSet className='border-0'>
            <FieldGroup>
              <div className="grid md:grid-cols-2 gap-4">
                <Field className="gap-4">
                  <FieldLabel htmlFor="city" className={style.label}>
                    First Name *
                  </FieldLabel>
                  <div className={style.inputWrapper}>
                    <Input
                      id="city"
                      type="text"
                      placeholder="text here"
                      className={style.text}
                    />
                  </div>
                  {/* <FieldDescription>This appears on invoices and emails.</FieldDescription> */}
                </Field>
                <Field className="gap-4">
                  <FieldLabel htmlFor="zip" className={style.label}>
                    Postal Code
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
              <div className="grid md:grid-cols-2 gap-4">
                <Field className="gap-4">
                  <FieldLabel htmlFor="city" className={style.label}>
                    First Name *
                  </FieldLabel>
                  <div className={style.inputWrapper}>
                    <Input
                      id="city"
                      type="text"
                      placeholder="text here"
                      className={style.text}
                    />
                  </div>{" "}
                  {/* <FieldDescription>This appears on invoices and emails.</FieldDescription> */}
                </Field>
                <Field className="gap-4">
                  <FieldLabel htmlFor="zip" className={style.label}>
                    Postal Code
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
                  First Name *
                </FieldLabel>
                <div className={style.inputWrapper}>
                  <Input
                    id="city"
                    type="text"
                    placeholder="text here"
                    className={style.text}
                  />
                </div>{" "}
                {/* <FieldDescription>This appears on invoices and emails.</FieldDescription> */}
              </Field>
            </FieldGroup>

            <FieldGroup>
              <Field className="gap-4">
                <FieldLabel htmlFor="city" className={style.label}>
                  First Name *
                </FieldLabel>
                <div className={style.inputWrapper}>
                  <Textarea
                    id="city"
                    type="text"
                    placeholder="text here"
                    className={style.textarea}
                  />
                </div>
                {/* <FieldDescription>This appears on invoices and emails.</FieldDescription> */}
              </Field>
            </FieldGroup>
          </FieldSet>

          <Field>
            <Button type="submit">Submit</Button>
          </Field>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
