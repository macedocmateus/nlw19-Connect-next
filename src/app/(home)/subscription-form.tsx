"use client";

import { User, Mail, ArrowRight } from "lucide-react";
import { InputIcon, InputRoot, InputField } from "../components/input";
import { Button } from "../components/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSubscriptions } from "@/http/api";
import { useRouter } from "next/navigation";

const subscriptionSchema = z.object({
    name: z.string().min(2, "Digite seu nome completo"),
    email: z.string().email("Digite um e-mail valido"),
});

type SubscriptionSchema = z.infer<typeof subscriptionSchema>;

export function SubscriptionForm() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SubscriptionSchema>({
        resolver: zodResolver(subscriptionSchema),
    });

    async function onSubscribe({ name, email }: SubscriptionSchema) {
        const { subscriberId } = await postSubscriptions({ name, email });

        router.push(`/invite/${subscriberId}`);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubscribe)}
            className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]"
        >
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
                Inscrição
            </h2>
            <div className="space-y-3">
                <div className="space-y-2">
                    <InputRoot>
                        <InputIcon>
                            <User></User>
                        </InputIcon>
                        <InputField
                            type="text"
                            placeholder="Nome Completo"
                            {...register("name")}
                        ></InputField>
                    </InputRoot>

                    {errors.name && (
                        <p className="text-danger text-xs font-semibold">
                            {errors.name.message}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <InputRoot>
                        <InputIcon>
                            <Mail></Mail>
                        </InputIcon>
                        <InputField
                            type="email"
                            placeholder="E-mail"
                            {...register("email")}
                        ></InputField>
                    </InputRoot>

                    {errors.email && (
                        <p className="text-danger text-xs font-semibold">
                            {errors.email.message}
                        </p>
                    )}
                </div>
            </div>

            <Button type="submit">
                Confirmar
                <ArrowRight></ArrowRight>
            </Button>
        </form>
    );
}
