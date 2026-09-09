"use client";

import * as React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface ReusableModalProps {
    trigger: React.ReactElement;
    title: string;
    description?: string;
    children: React.ReactNode;
    footer?: React.ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    className?: string;
}

export function ReusableModal({
    trigger,
    title,
    description,
    children,
    footer,
    open,
    onOpenChange,
    className,
}: ReusableModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger render={trigger} />

            <DialogContent className={className ?? "sm:max-w-lg"}>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description && (
                        <DialogDescription>{description}</DialogDescription>
                    )}
                </DialogHeader>

                <ScrollArea className="max-h-[60vh] pr-4">
                    <div className="text-sm text-muted-foreground leading-relaxed space-y-3">
                        {children}
                    </div>
                </ScrollArea>

                {footer ? (
                    <DialogFooter>{footer}</DialogFooter>
                ) : (
                    <DialogFooter>
                        <DialogClose render={<Button variant="secondary" />}>
                            Close
                        </DialogClose>
                    </DialogFooter>
                )}
            </DialogContent>
        </Dialog>
    );
}