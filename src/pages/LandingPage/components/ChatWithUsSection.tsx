import { Box, Button } from "@mui/material"

const bulletList = [
    "No carash Diet",
    "No weight-loss pills",
    "No apetite blocker powders"
]

export const BulletPoint = (props: { text: string, iconUrl?: string, className?: string, imageClassName?: string }) => {
    const { text, iconUrl, className, imageClassName } = props
    return (
        <span className={`flex items-center gap-2 ${className}`}>
            <img
                src={iconUrl ?? "tttick.png"}
                className={`${iconUrl ? 'h-12 md:h-16' : 'h-6'} ${imageClassName}`}
            />
            <span> &nbsp;{text}</span>
        </span>
    )
}

const ChatWithUsSection = () => {
    return (
        <div className="bg-beige flex flex-col justify-center items-center text-center p-10 gap-10 w-full" id="contact_us">
            <span className="text-2xl">
                Invest in yourself
            </span>
            <span className="text-2xl">
                boost your
                <span className="text-green-1 text-3xl font-bold"> health, body </span>
                and
                <span className="text-green-1 text-3xl font-bold"> confidence</span>
            </span>
            <Button href="https://wa.me/+917028865139">
                <span className="mx-2">
                    <img src="whatsappLogo.png" className="h-6"></img>
                </span>
                Chat With Us
            </Button>
            <Box className="flex flex-wrap justify-between gap-10 w-full md:px-20">
                {bulletList.map((bullet) => {
                    return <BulletPoint text={bullet} />
                })}
            </Box>
        </div>
    )
}

export default ChatWithUsSection