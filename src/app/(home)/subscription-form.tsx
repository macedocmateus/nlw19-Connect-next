import { User, Mail, ArrowRight } from "lucide-react";
import { InputIcon, InputRoot, InputField } from "../components/input";
import { Button } from "../components/button";

export function SubscriptionForm() {
    return (
        <form className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
                Inscrição
            </h2>

            <div className="space-y-3">
                <InputRoot>
                    <InputIcon>
                        <User></User>
                    </InputIcon>
                    <InputField
                        type="text"
                        placeholder="Nome Completo"
                    ></InputField>
                </InputRoot>

                <InputRoot>
                    <InputIcon>
                        <Mail></Mail>
                    </InputIcon>
                    <InputField type="email" placeholder="E-mail"></InputField>
                </InputRoot>
            </div>

            <Button type="submit">
                Confirmar
                <ArrowRight></ArrowRight>
            </Button>
        </form>
    );
}
