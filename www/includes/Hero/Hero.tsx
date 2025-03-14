
import TerminalSection from "@/components/TerminalSection"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"


export default function Hero() {

    const terminalCommands = [
        "$ whoami",
        "desir-technologies",
        "$ cat mission.txt",
        "Building immersive digital experiences and innovative solutions for the modern world.",
        "$ ls -la services/",
        "total 8",
        "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 web-development",
        "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 mobile-apps",
        "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 ui-design",
        "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 cloud-services",
        "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 ai-solutions",
        "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 security-consulting",
        "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 it-triage",
        "drwxr-xr-x  2 desir  staff  64  Mar 9 14:32 data-analytics",
        "$ ./start-project.sh",
        "Initializing new project...",
        "Ready to build something amazing!",
    ]

    return (
        <section className="container mx-auto px-4 pt-32 pb-16 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl"
                >
                    <h1 className="text-5xl md:text-7xl font-light text-foreground/90 dark:text-foreground/90 mb-6">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 font-retro">
                            DESIR TECHNOLOGIES
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-foreground/60 dark:text-foreground/60 mb-8 font-retro">
                        Building immersive digital experiences and innovative solutions for the modern world.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Button
                            asChild
                            size="lg"
                            className="rounded-full bg-desir-500 hover:bg-desir-600 text-white font-retro"
                        >
                            <Link href="/contact">
                                GET STARTED <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="rounded-full font-retro">
                            <Link href="/projects">EXPLORE PROJECTS</Link>
                        </Button>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <TerminalSection title="DESIR TECHNOLOGIES" commands={terminalCommands} />
                </motion.div>
            </div>
        </section>
    )

}