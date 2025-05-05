import { motion } from "framer-motion";
import { SoonCardContainer, InformationWrapper, SoonImage } from "./styles";
import comingSoonImg from "@/assets/images/emBreve.png";
import useIsMobile from "../../../../hooks/window/Mobile";

export default function SoonCard() {
  const isMobile = useIsMobile();

  return (
    <SoonCardContainer>
      <InformationWrapper>
        <motion.div
          whileHover={{
            rotate: [0, -15, 15, -10, 10, -5, 5, 0],
            transition: { duration: 0.8 },
          }}
        >
          <SoonImage src={comingSoonImg} alt="Em breve" isMobile={isMobile} />
        </motion.div>
      </InformationWrapper>
    </SoonCardContainer>
  );
}
