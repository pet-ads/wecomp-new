import { motion } from "framer-motion";
import { SoonCardContainer, InformationWrapper } from "./styles";
// import { IoIosNotifications } from "react-icons/io";
import comingSoonImg from "@/assets/images/emBreve.png";

export default function SoonCard() {
  return (
    <SoonCardContainer>
      <InformationWrapper>
        <motion.div
          whileHover={{
            rotate: [0, -15, 15, -10, 10, -5, 5, 0],
            transition: { duration: 0.8 },
          }}
        >
          {/* <IoIosNotifications size="2rem" /> */}
          <img
          src={comingSoonImg}
          alt="Em breve"
          style={{ width: "100%", maxWidth: "20rem" }}
        />
        </motion.div>
        {/* <SoonText>Em breve!</SoonText> */}
      </InformationWrapper>
    </SoonCardContainer>
  );
}