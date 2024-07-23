import { MembersIcon, InvoiceIcon, ClientsIcon, ProductsIcon} from "@/components/icons/icons";

export interface Module {
    name: string;
    Icon?: any;
}


export const Modules: Module[] = [
    {
        name: "Products",
        Icon: ProductsIcon,
    },
    {
        name: "Invoices",
        Icon: InvoiceIcon
    },
    {
        name: "Clients",
        Icon: ClientsIcon
    },
    {
        name: "Members",
        Icon: MembersIcon
    }
]
