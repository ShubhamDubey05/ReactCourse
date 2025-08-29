import { IoMdMail } from "react-icons/io";
import { AiTwotoneMessage } from "react-icons/ai";
import { Stack, Box, Heading, Text } from "@chakra-ui/react";
import DashboardLayout from "../../components/DashboardLayout";
import ContactCard from "./components/ContactCard";
import SupportCard from "./components/SupportCard";
import InfoCard from "../Dashboard/components/InfoCard";

const Support = () => {
  return (
    <DashboardLayout>
      <Stack spacing="6rem" py="2rem" px="1rem">
        {/* Page Header */}
        <Box textAlign="center" mb="2rem">
          <Heading size="lg" color="p.black" mb={2}>
            Support Center
          </Heading>
          <Text fontSize="md" color="black.60">
            Get in touch with us for assistance, queries, or live chat support.
          </Text>
        </Box>

        {/* Contact Section */}
        <SupportCard
          icon={IoMdMail}
          leftComponent={<ContactCard />}
          title="Contact Us"
          text="Have a question or just want to know more? Fill out the form and our team will get back to you."
        />

        {/* Live Chat Section */}
        <SupportCard
          icon={AiTwotoneMessage}
          leftComponent={
            <InfoCard
              inverted
              tagText="Chat"
              imgUrl="/grid_bg.svg"
              text="Instant support from our real estate, mortgage, and corporate account services team."
            />
          }
          title="Live Chat"
          text="Don’t have time to wait for an email? Start a live chat with our team now."
        />
      </Stack>
    </DashboardLayout>
  );
};

export default Support;
