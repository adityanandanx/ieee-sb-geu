import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Heading } from "@/components/ui/typography";
import { problemStatements } from "./data";
import { Button } from "@/components/ui/button";
import { ProblemStatement } from "./types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="container py-20">
      <Heading>IEEE Matrix</Heading>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">PS Code</TableHead>
            <TableHead className="text-center">Domain</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">View Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {problemStatements.map((ps) => (
            <TableRow key={ps.code}>
              <TableCell className="font-medium">{ps.code}</TableCell>
              <TableCell className="text-center">{ps.domain}</TableCell>
              <TableCell>{ps.title}</TableCell>
              <TableCell className="text-right">
                <PSDialog ps={ps} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

type PSDialogProps = {
  ps: ProblemStatement;
};

const PSDialog = ({ ps }: PSDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>View Details</Button>
      </DialogTrigger>
      <DialogContent className="max-w-screen-lg w-full">
        <DialogHeader>
          <DialogTitle>{ps.title}</DialogTitle>
          <DialogDescription>{ps.code}</DialogDescription>
        </DialogHeader>
        <p>{ps.domain}</p>
        <p>{ps.detail}</p>
      </DialogContent>
    </Dialog>
  );
};

export default Page;
