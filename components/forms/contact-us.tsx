"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactUsSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name is too long"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name is too long"),
  email: z.email(),
  message: z
    .string()
    .min(10, "Message should have at least 10 characters")
    .max(2000, "Message is too long"),
});

export default function ContactUsForm() {
  const contactUsForm = useForm<z.infer<typeof contactUsSchema>>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    mode: "onTouched",
  });

  const onSubmit = (values: z.infer<typeof contactUsSchema>) => {
    console.log(values);
  };

  return (
    <Form {...contactUsForm}>
      <form
        className="flex flex-col gap-4 w-full"
        onSubmit={contactUsForm.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-start sm:flex-row md:flex-col lg:flex-row gap-4 xl:gap-8">
          <FormField
            control={contactUsForm.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="basis-1/2 w-full">
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="First name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={contactUsForm.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="basis-1/2 w-full">
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Last name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={contactUsForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={contactUsForm.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  id="message"
                  placeholder="Type your message here."
                  className="min-h-24 resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="mt-4"
          disabled={!contactUsForm.formState.isValid}
        >
          Send Message
        </Button>
      </form>
    </Form>
  );
}
