"use client";

import { InputRoot, InputIcon, InputField } from "@/app/components/input";
import { Copy, Link } from "lucide-react";
import { IconButton } from "@/app/components/icon-button";

interface InviteLinkInputProps {
    inviteLink: string;
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
    function copyInviteLink() {
        navigator.clipboard.writeText(inviteLink);
    }

    return (
        <InputRoot>
            <InputIcon>
                <Link className="size-5"></Link>
            </InputIcon>

            <InputField defaultValue={inviteLink} readOnly></InputField>
            <IconButton className="-mr-2" onClick={copyInviteLink}>
                <Copy className="size-5"></Copy>
            </IconButton>
        </InputRoot>
    );
}
