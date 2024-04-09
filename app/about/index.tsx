"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { NAME } from "@/constant";
import { internships, urls } from "@/data";
import Project from "@/project/page";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col gap-10">
      <Avatar>
        <AvatarImage src="/joshua.png" />
        <AvatarFallback>Joshua</AvatarFallback>
      </Avatar>

      <div className="flex flex-col gap-1.5">
        <h1>{NAME}</h1>
        <h4>Information Systems Sophomore @ Singapore Management University</h4>
        <h4>Aspiring Software Engineer</h4>
      </div>

      <h4 className="leading-relaxed">
        Hey, I'm Joshua! I'm interested in web/app development and all things
        tech. Outside of work, I enjoy working out at the gym and going for a
        quick run around the city.
      </h4>

      <div className="flex flex-row gap-4">
        {urls.map(({ label, isPDF, path }) => (
          <span
            className="flex items-center gap-1 text-sm cursor-pointer dark:text-lightGray hover:text-gray dark:hover:text-white"
            key={label}
          >
            <ArrowTopRightIcon className="w-5 h-5" />
            {!isPDF ? (
              <Link key={label} href={path} target="_blank">
                {label}
              </Link>
            ) : (
              <span>
                <a download href={path}>
                  {label}
                </a>
              </span>
            )}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        <h1>Currently</h1>
        {internships
          .slice(0, 1)
          .map(({ company, position, timeline, icon, achievements }) => (
            <Dialog key={company}>
              <DialogTrigger className="flex flex-row gap-7 cursor-pointer hover:opacity-90 text-left">
                <div className="flex flex-col gap-1">
                  <h4>
                    {position} @ {company}
                  </h4>
                  <h4 className="dark:text-lightGray">{timeline}</h4>
                </div>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <div className="flex gap-5 items-center justify-center pb-5">
                      <Image
                        src={icon}
                        width={50}
                        height={50}
                        className="rounded-full"
                        alt={company}
                      />
                      {company}
                    </div>
                  </DialogTitle>
                  <DialogDescription>
                    {achievements.map((achievement) => (
                      <li key={achievement} className="py-1">
                        {achievement}
                      </li>
                    ))}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}

        <h1>Previously</h1>
        {internships
          .slice(1, internships.length)
          .map(({ company, position, timeline, icon, achievements }) => (
            <Dialog key={company}>
              <DialogTrigger className="flex flex-row gap-7 cursor-pointer hover:opacity-90 text-left">
                <div className="flex flex-col gap-1">
                  <h4>
                    {position} @ {company}
                  </h4>
                  <h4 className="dark:text-lightGray">{timeline}</h4>
                </div>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    <div className="flex gap-5 items-center justify-center pb-5">
                      <Image
                        src={icon}
                        width={50}
                        height={50}
                        className="rounded-full"
                        alt={company}
                      />
                      {company}
                    </div>
                  </DialogTitle>
                  <DialogDescription>
                    {achievements.map((achievement) => (
                      <li key={achievement} className="py-1">
                        {achievement}
                      </li>
                    ))}
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          ))}
      </div>

      <Project />
    </div>
  );
}
