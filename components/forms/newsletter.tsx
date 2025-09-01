"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const newsletterSchema = z.object({
  email: z.email(),
});

export default function NewsletterForm() {
  const newsletterForm = useForm<z.infer<typeof newsletterSchema>>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
    mode: "onTouched",
  });

  const onSubmit = (values: z.infer<typeof newsletterSchema>) => {
    console.log(values);
  };

  return (
    <Form {...newsletterForm}>
      <form
        className="flex flex-col gap-3 w-full"
        onSubmit={newsletterForm.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col items-start sm:flex-row md:flex-col lg:flex-row gap-4 xl:gap-8">
          <FormField
            control={newsletterForm.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" disabled={!newsletterForm.formState.isValid}>
          Subscribe
        </Button>
      </form>
    </Form>
  );
}
