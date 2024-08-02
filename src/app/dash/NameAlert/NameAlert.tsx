"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Loading from "@/components/ui/loading";
import { useUserDataMutation } from "@/lib/hooks/mutations";
import { useUserDataQuery } from "@/lib/hooks/queries";
import { useRef } from "react";
import { toast } from "sonner";

type Props = {};

const NameAlert = (props: Props) => {
  const {
    data: userData,
    isPending: queryPending,
    isError,
    error,
  } = useUserDataQuery();
  const { mutate, isPending: mutationPending } = useUserDataMutation();
  const nameRef = useRef<HTMLInputElement>(null);
  if (isError) {
    toast.error("An Error Occurred", { description: error.message });
    return null;
  }

  return (
    <>
      <Loading open={queryPending} />
      {!queryPending && userData && (
        <AlertDialog open={!!!userData.full_name}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>
                Set your full name to continue
              </AlertDialogTitle>
              <AlertDialogDescription>
                You can always change this later.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                mutate({ id: userData.id, full_name: nameRef.current?.value });
              }}
            >
              <Input className="mb-2" placeholder="Full Name" ref={nameRef} />
              <AlertDialogFooter>
                <AlertDialogAction asChild>
                  <Button type="submit" disabled={mutationPending}>
                    Continue
                  </Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </form>
          </AlertDialogContent>
        </AlertDialog>
      )}
    </>
  );
};

export default NameAlert;
