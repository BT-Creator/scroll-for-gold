import './HeroHeading.css';
import { Flex, Title, Text } from "@mantine/core";

interface HeroHeadingProps {
    title: string;
    text: string;
}

export default function HeroHeading({title, text}:HeroHeadingProps){
    return (
        <Flex
          gap="md"
          justify="center"
          align="center"
          direction="column"
          wrap="nowrap"
          mt='lg'>
          <Title order={1}>{title}</Title>
          <Text size='md'>{text}</Text>
        </Flex>
    );
}