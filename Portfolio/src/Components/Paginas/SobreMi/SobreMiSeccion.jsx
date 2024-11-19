
import { Grid, GridItem, Image, Text, Box} from "@chakra-ui/react";
import { AnimatedGridItem } from "../../Atomo/SobreMiInfo/AnimatedGridItem";
import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";


export const SobreMiSeccion = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#scroll-container"),
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);
  return (
    <Box maxW="1200px" mx="auto" id="scroll-container">
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={8}
        px={4}
      >
        {/* Título */}
        <GridItem colSpan={2}>
          
            <Text fontSize="2xl" fontWeight="bold" textAlign="center">
              Sobre mí
            </Text>
          
        </GridItem>

        {/* Contenido */}
        <GridItem>
          <AnimatedGridItem>
            <Text>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis reprehenderit natus pariatur amet doloremque adipisci voluptatum, assumenda dolor, earum sed repellendus temporibus officiis voluptate aperiam eius porro! Error, vitae unde!
              Quaerat perferendis aspernatur eum a optio distinctio excepturi aliquid et, itaque voluptatum mollitia, commodi sequi. Dolorem adipisci est dolore aliquid reiciendis nesciunt sit iste, assumenda totam minus sunt perferendis deleniti.
              Molestiae explicabo odit sint natus ex. Ea nisi ullam consequatur laboriosam et est enim tempore quia debitis, aliquid eius deserunt? Itaque qui nemo rerum illo quibusdam, numquam unde soluta deleniti!
              Quis molestiae deserunt sunt ipsa! Alias voluptate provident ipsam iusto rerum eius soluta facere vel, delectus possimus totam iure! Assumenda quod ipsam amet accusamus dicta expedita, ab illo autem culpa?
              Sint suscipit, enim dolore accusamus vel laudantium neque repellat dicta corporis, quibusdam natus officia illum odit error veniam deleniti est. Voluptates deserunt aspernatur, illum omnis assumenda quaerat cumque minus dignissimos?
              Culpa, eos accusantium. Hic architecto totam consectetur itaque. Doloribus, a officia facilis molestias placeat reiciendis voluptas impedit, nisi minima atque quis laboriosam architecto aspernatur sunt, recusandae quasi exercitationem quia dolores?
              Autem, repudiandae quisquam. Inventore ad aspernatur earum ullam porro quae cum, voluptatibus quidem, quasi ratione quo? Quibusdam, vel omnis odit vero vitae ex facilis animi veniam obcaecati nesciunt dolorum aliquam.
              Explicabo optio, officiis ipsa quasi minima quod sint? Totam et dolorum debitis rem aspernatur ab amet laborum at sint unde blanditiis beatae dicta corrupti consectetur, nihil est, commodi quisquam maxime.
              Laboriosam tempora qui officiis, libero officia similique ea corporis. Quas sed ab corporis quos nobis dolor explicabo nihil velit iusto, aut quasi repellat sapiente harum vero, rerum nemo molestias. Laudantium!
              Quaerat minima explicabo culpa id distinctio ullam molestias nesciunt quos perferendis, architecto animi, debitis facilis expedita iusto, libero labore eveniet corrupti aperiam aspernatur eum vel perspiciatis assumenda ut atque. Ullam.            
            </Text>
          </AnimatedGridItem>
        </GridItem>

        <GridItem>
          <AnimatedGridItem>
            <Image 
              src="https://via.assets.so/img.jpg?w=300&h=400&tc=black&bg=gray&t=Image"
              alt="Placeholder"
              borderRadius="md"
            />
          </AnimatedGridItem>
        </GridItem>

        <GridItem>
          <AnimatedGridItem>
            <Image 
              src="https://via.assets.so/img.jpg?w=300&h=400&tc=black&bg=gray&t=Image"
              alt="Placeholder"
              borderRadius="md"
            />
          </AnimatedGridItem>
        </GridItem>

        <GridItem>
          <AnimatedGridItem>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet eum quibusdam quidem ea omnis iusto aperiam non, aut atque possimus repellat labore, sed doloribus! Minus voluptatibus veritatis quas harum aperiam?
              Vitae nihil non eligendi, aspernatur itaque exercitationem provident eos possimus odit a sequi fuga, rerum iure expedita, laborum saepe facilis. Labore assumenda sed voluptatem repudiandae consequuntur aliquid impedit dolor veniam?
              Accusamus laudantium, totam quos, fuga praesentium aut fugiat quod illo voluptatibus dicta deserunt facere velit iusto distinctio quia sit vero amet? Debitis laborum obcaecati nobis quam praesentium eos illum maxime.
              Placeat delectus fugiat doloremque adipisci sequi similique. Iusto unde excepturi ad voluptates voluptas architecto temporibus iste delectus. Asperiores officiis a quam cumque voluptas facilis veritatis corrupti impedit in. Voluptatibus, dolorum.
              Eius dolore ab laboriosam placeat. Delectus, fugit magnam perspiciatis, corporis expedita exercitationem a cum quia molestias dolorum veritatis! Eum fugit facilis repellendus aut, tempore molestias sequi. Beatae laboriosam libero distinctio.
              Corporis sit necessitatibus voluptate labore quisquam ut corrupti, placeat praesentium quod possimus dolore, repudiandae nulla ullam incidunt ex et? Corporis debitis voluptate doloremque perferendis dolorem totam veritatis dolor sequi similique!
              Sapiente labore illo voluptatum adipisci inventore, aut eligendi nesciunt obcaecati cumque esse eaque repellendus ipsa aspernatur reprehenderit expedita magnam fuga architecto pariatur ipsam corporis unde quae distinctio facere officia. Ut.
              Voluptatem blanditiis laborum soluta quae alias possimus vel sint incidunt eius quibusdam commodi, voluptatum recusandae voluptatibus ipsum molestias autem rem odio quis reiciendis asperiores, sit illum nostrum neque? Ea, magnam.
              Repellat, dolores dolorum officia laboriosam ipsa quod nam corrupti velit obcaecati quia. Laudantium perspiciatis repellat consequuntur sed assumenda facere earum totam exercitationem, omnis veritatis iusto modi sunt saepe cupiditate. Molestias!
              Adipisci ut libero maiores tempore provident autem nostrum, quod eveniet quae sunt sint eius recusandae esse excepturi possimus alias necessitatibus incidunt blanditiis qui quo ullam dolor. Suscipit cupiditate dignissimos labore!
            </Text>
          </AnimatedGridItem>
        </GridItem>
      </Grid>
    </Box>
  );
};
