"use client"

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import EventForm from "./event-form"

const CreateEventDrawer = () => {

    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const create = searchParams.get("create");
        if (create === "true") {
            setIsOpen(true);
        }
    }, [searchParams])

    const handleClose = () => {
        setIsOpen(false);
        if (searchParams.get("create") === "true") {
            router.replace(window.location?.pathname)
        }
    }

    return (
        <Drawer open={isOpen}>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle className=" text-center">Create New Event</DrawerTitle>
                </DrawerHeader>
                <EventForm onSubmitForm={() => {
                    handleClose();
                }} />
                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button variant="outline" onClick={handleClose} className=" text-center mx-36">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}

export default CreateEventDrawer