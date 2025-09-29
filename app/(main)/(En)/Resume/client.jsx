"use client"

import { useRef } from "react"
import BioSection from "./sections/bio"
import SkillsSection from "./sections/skills"
import EduSection from "./sections/edu"
import RewardsSection from "./sections/rewards"
import ExpSection from "./sections/expriences"
import AssetsSection from "./sections/assets"
import Link from "next/link"

export default function ResumeClient() {
    const contRef = useRef(null)
    const bioRef = useRef(null)
    const skillsRef = useRef(null)
    const eduRef = useRef(null)
    const rewardsRef = useRef(null)
    const expRef = useRef(null)

    const findPosition = (obj) => {
        let currenttop = 0;
        if (obj.offsetParent) {
            do {
                currenttop += obj.offsetTop;
            } while ((obj = obj.offsetParent));
            return [currenttop];
        }
    }

    return (
        <>
            <section className="flex flex-col w-full lg:w-1/3">
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-4">
                    <Link className="btn btn-primary rounded-xl " href="#bio">
                        Biography
                    </Link>
                    <Link className="btn btn-primary rounded-xl " href="#skills">
                        Skills
                    </Link>
                    <Link className="btn btn-primary rounded-xl " href="#education">
                        Education
                    </Link>
                    <Link className="btn btn-primary rounded-xl " href="#expriences">
                        Expriences
                    </Link>
                </div>
            </section>
            <section ref={contRef} className="grow max-h-[76vh] lg:max-h-[80vh] scroll-smooth overflow-y-scroll flex-col gap-12 lg:px-4 lg:py-2">
                <BioSection _ref={bioRef} />
                <SkillsSection _ref={skillsRef} />
                <EduSection _ref={eduRef} />
                <RewardsSection _ref={rewardsRef} />
                <ExpSection _ref={expRef} />
                <AssetsSection />
            </section>
        </>
    )
}