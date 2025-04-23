import Image from "next/image";
import gold from "../../../assets/Medal-gold.svg";
import silver from "../../../assets/Medal-silver.svg";
import cooper from "../../../assets/Medal-cooper.svg";

export function Ranking() {
    return (
        <div className="w-full max-w-[440px] space-y-5">
            <h2 className="text-gray-200 font-heading font-semibold leading-none">
                Ranking de indicações
            </h2>

            <div className="space-y-4">
                <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
                    <span className="text-sm text-gray-300 leading-none">
                        <span className="font-semibold">1°</span> | Mateus
                        Macedo
                    </span>

                    <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                        1050
                    </span>

                    <Image
                        src={gold}
                        alt="Medalha de ouro"
                        className="absolute top-0 right-8"
                    ></Image>
                </div>

                <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
                    <span className="text-sm text-gray-300 leading-none">
                        <span className="font-semibold">2°</span> | Rafael
                        Queiroz
                    </span>

                    <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                        1025
                    </span>

                    <Image
                        src={silver}
                        alt="Medalha de prata"
                        className="absolute top-0 right-8"
                    ></Image>
                </div>

                <div className="rounded-xl bg-gray-700 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
                    <span className="text-sm text-gray-300 leading-none">
                        <span className="font-semibold">3°</span> | Cátia Silva
                    </span>

                    <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
                        1015
                    </span>

                    <Image
                        src={cooper}
                        alt="Medalha de bronze"
                        className="absolute top-0 right-8"
                    ></Image>
                </div>
            </div>
        </div>
    );
}
