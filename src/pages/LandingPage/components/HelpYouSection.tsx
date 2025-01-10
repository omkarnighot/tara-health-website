import { Box } from "@mui/material"

const answerCardsData = [
    {
        imageUrl : "answer1.png",
        title: "Diet Consultations",
        subTitle: "Find a nutritious Diet that fits your lifestyle and food preferences. Take charge of your daily habits with one of the many ongoing Diets including Clean Eating and High Protein"
    },
    {
        imageUrl : "answer2.png",
        title: "Excercise Guidance",
        subTitle: "Follow a 7-21 day Meal Plan and get four pre-planned recipes a day. Depending on your health goals, there are many Meal Plans to choose from including Keto Burn and Vegan for a week."
    },
    {
        imageUrl : "answer3.png",
        title: "Regular Follow Up",
        subTitle: "Track your activities and what you eat with the help of our food-, exercise- and water trackers to maintain a balanced everyday life."
    },
    {
        imageUrl : "answer4.png",
        title: "Progress Checks",
        subTitle: "To help you reach your goals and customize your health journey you can add your favorite meals, food items, recipes and exercises to your Favorites."
    },
    {
        imageUrl : "answer5.png",
        title: "Whats app Community Support",
        subTitle: "Connect with professionals and community members to discuss health concerns, share experiences, and seek expert advice."
    }
]


const AnswerCard = (props:{ imageUrl: string, title: string, subTitle: string}) => {
    
    const { imageUrl, title, subTitle } = props

    return (
        <Box className="flex items-center gap-3 my-5">
            <Box className="w-1/3">
                <img src={imageUrl}></img>
            </Box>
            <Box className="flex flex-col gap-2 w-2/3">
                <Box className="font-semibold">
                    {title}
                </Box>
                <Box className="text-xs">
                    {subTitle}
                </Box>
            </Box>
        </Box>
    )
}

const HelpYouSection = () => {
    return (
        <Box className="flex flex-col gap-10 justify-center items-center px-5 py-12 xl:my-24">
            <span className="text-lg lg:text-2xl">
                How can
                <span className="text-green-2 text-4xl lg:text-6xl font-bold"> Tara Health </span>
                help you ?
            </span>
            <Box className="flex flex-col items-center justify-center flex-wrap md:flex-row gap-16">
                {answerCardsData.map((answer) => {
                    const {imageUrl, title, subTitle } = answer
                    return (
                    <Box className="flex flex-col gap-2 md:w-1/4">
                        <AnswerCard imageUrl={imageUrl} title={title} subTitle={subTitle} />
                        <img src="separator.svg" className="h-1"></img>
                        </Box>
                        )
                })}
            </Box>
        </Box>
    )
}

export default HelpYouSection