import { ArrowRight, Copy, Mail } from "lucide-react";
import { Button } from "./components/button";
import { IconButton } from "./components/icon-button";
import { InputRoot, InputIcon, InputField } from "./components/input";

export default function Home() {
    return (
        <main>
            <Button type="submit">
                Enviar
                <ArrowRight></ArrowRight>
            </Button>

            <IconButton>
                <Copy></Copy>
            </IconButton>

            <div>
                <InputRoot>
                    <InputIcon>
                        <Mail className="size-5"></Mail>
                    </InputIcon>
                    <InputField></InputField>
                </InputRoot>
            </div>
        </main>
    );
}
