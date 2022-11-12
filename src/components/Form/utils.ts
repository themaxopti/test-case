import { UseFormRegister } from "react-hook-form";

export function minLength(value: number) {
  return { value, message: `Min length is ${value}` };
}

interface Validation {
  minLenght?: number;
  maxLength?: number;
  reuqired?: boolean;
  email?: boolean;
  valueAsNumber?: boolean;
  onlyString?: boolean;
}

export function registerInput(
  register: UseFormRegister<any>,
  name: string,
  { email, maxLength, minLenght, onlyString }: Validation
) {
  return {
    ...register(name, {
      required: "This field is required",
      minLength: minLenght
        ? { message: `Min length is ${minLenght}`, value: minLenght }
        : undefined,
      maxLength: maxLength
        ? { message: `Min length is ${maxLength}`, value: maxLength }
        : undefined,
      pattern: email
        ? {
            value:
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Incorect email",
          }
        : onlyString
        ? { value: /[A-Z А-Я a-z а-я]/, message: "must be a string" }
        : undefined,
    }),
  };
}
