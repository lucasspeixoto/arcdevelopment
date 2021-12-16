import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import vision from "../../assets/vision.svg";
import technologyAnimation from "../../animations/technologyAnimation/data.json";
import consultation from "../../assets/consultationIcon.svg";
import mockup from "../../assets/mockupIcon.svg";
import review from "../../assets/reviewIcon.svg";
import design from "../../assets/designIcon.svg";
import build from "../../assets/buildIcon.svg";
import launch from "../../assets/launchIcon.svg";
import maintain from "../../assets/maintainIcon.svg";
import iterate from "../../assets/iterateIcon.svg";

import { CallToAction } from "../../components/ui/CallToAction";
import { useStyles } from "./styles";
import theme from "../../components/ui/Theme";
import Lottie from "react-lottie";

export const Revolution = () => {
  const classes = useStyles();

  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  const technologyOptions = {
    loop: true,
    autoplay: false,
    animationData: technologyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const visionImage = (
    <Grid item lg style={{ textAlign: "center" }}>
      <img
        src={vision}
        alt="mountain through binoculars"
        className={classes.image}
      />
    </Grid>
  );
  return (
    <Grid container direction="column">
      <Typography
        variant="h2"
        className={classes.sectionContainer}
        style={{ fontFamily: "pacifico", fontWeight: 500 }}
      >
        The Revolution
      </Typography>

      {/*--Vision--*/}
      <Grid
        item
        container
        alignItems="center"
        justifyContent={matchesMD ? "center" : undefined}
        className={classes.sectionContainer}
      >
        {matchesMD ? null : visionImage}
        <Grid item className={classes.textContainer} lg>
          <Typography variant="h4" paragraph>
            Vision
          </Typography>
          <Typography variant="body1" paragraph>
            The rise of computers, and subsequently the Internet, has completely
            altered every aspect of human life. This has increased our comfort,
            broadened our connections, and reshaped how we view the world.
          </Typography>
          <Typography variant="body1" paragraph>
            What once was confined to huge rooms and teams of engineers, now
            resides in every single one of our hands. Harnessing this unlimited
            potential by using it to solve problems and better lives is at the
            heart of what we do.
          </Typography>
          <Typography variant="body1" paragraph>
            We want to help businesses capitalize on the latest and greatest
            technology. The best way to predict the future is to be the one
            building it, and we want to help guide the world into this next
            chapter of technological expansion, exploration and innovation.
          </Typography>
          <Typography variant="body1" paragraph>
            By holding ourselves to rigorous standards and pristine quality, we
            can ensure you have the absolute best tools necessary to thrive in
            this new frontier.
          </Typography>
          <Typography variant="body1" paragraph>
            We see a future where every individual has personalized software
            custom tailored to their lifestyle, culture and interests, helping
            them overcome life’s obstacles. Each Project is a step towards that
            goal.
          </Typography>
        </Grid>
        {matchesMD ? visionImage : null}
      </Grid>

      {/*--Technology--*/}
      <Grid
        item
        container
        alignItems="center"
        justifyContent={matchesMD ? "center" : undefined}
        className={classes.sectionContainer}
      >
        <Grid item lg className={classes.textContainer}>
          <Typography variant="h4" paragraph>
            Technology
          </Typography>
          <Typography variant="body1" paragraph>
            In 2013, Facebook invented a new way of building websites. This new
            system, React.js, completely revolutionizes the process and practice
            of software development.
          </Typography>
          <Typography variant="body1" paragraph>
            Instead of chaining together long individual pages, like traditional
            websites, React websites are built with little chunks of code called
            components. These components are faster, easier to maintain, and are
            easily reused and customized, each serving a singular purpose.
          </Typography>
          <Typography variant="body1" paragraph>
            Two years later, they shocked the world by releasing a similar
            system, React Native, for producing iOS and Android apps. Instead of
            having to master two completely separate development platforms, you
            can leverage the knowledge you already possessed from building
            websites and reapply it directly! This was a huge leap forward.
          </Typography>
          <Typography variant="body1" paragraph>
            This technology is now being used by companies like AirBnB,
            Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
            Facebook purchased Instagram large portions of it were even rebuilt
            using React.
          </Typography>
          <Typography variant="body1" paragraph>
            Developers have since built on top of these systems by automating
            Project setup and deployment, allowing creators to focus as much as
            possible on their work itself.
          </Typography>
          <Typography variant="body1" paragraph>
            These technical advancements translate into savings by significantly
            reducing the workload and streamlining the workflow for developing
            new pieces of software, while also lowering the barrier to entry for
            mobile app development.
          </Typography>
          <Typography variant="body1" paragraph>
            This puts personalization in your pocket – faster, better and more
            affordable than ever before.
          </Typography>
        </Grid>
        <Grid item lg>
          <Lottie options={technologyOptions} style={{ maxWidth: "20rem" }} />
        </Grid>
      </Grid>

      {/*--Process--*/}
      <Grid item container justifyContent="center">
        <Grid item className={classes.sectionContainer}>
          <Typography variant="h4" paragraph>
            Process
          </Typography>
        </Grid>

        {/*--Consultation--*/}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          justifyContent={matchesMD ? "space-around" : undefined}
          className={classes.processSection}
          style={{ backgroundColor: "#a2a2a1" }}
        >
          <Grid item lg className={classes.textContainer}>
            <Typography variant="h4" paragraph style={{ color: "#000" }}>
              Consultation
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              Our process begins the moment you realize you need a piece of
              technology for your business. Whether you already have an idea for
              where to start and what to do, or if you just know you want to
              step things up, our initial consultation will help you examine
              your business holistically to find the best solutions.
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              Detailed notes will be taken on your requirements and constraints,
              while taking care to identify other potential areas for
              consideration.
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              Cutting-edge advancements in machine learning like object
              detection and natural language processing allow computers to do
              things previously unimaginable, and our expertise and intuition
              will help usher you into this new future of possibilities.
            </Typography>
          </Grid>
          <Grid item lg className={classes.imageContainer}>
            <img
              src={consultation}
              alt="handshake"
              className={classes.imageProcess}
            />
          </Grid>
        </Grid>

        {/*--Mockup--*/}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          justifyContent={matchesMD ? "space-around" : undefined}
          className={classes.processSection}
          style={{ backgroundColor: "#ff7373" }}
        >
          <Grid item lg className={classes.textContainer}>
            <Typography variant="h4" paragraph style={{ color: "#000" }}>
              Mockup
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              After we settle on the best path forward and decide on a solution
              to pursue, details like the cost and timeline will be finalized.
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              Then it’s time for us to start on your minimum viable product.
              That’s just a fancy term for a mockup, which doesn’t include
              colors, images, or any other polished design elements, but
              captures the essential layout structure and functionality.
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              This helps us understand and refine the solution itself before
              getting distracted by specifics and looks.
            </Typography>
          </Grid>
          <Grid item lg className={classes.imageContainer}>
            <img
              src={mockup}
              alt="basic website design outline"
              className={classes.imageProcess}
            />
          </Grid>
        </Grid>

        {/*--Review--*/}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          justifyContent={matchesMD ? "space-around" : undefined}
          className={classes.processSection}
          style={{ backgroundColor: "#2d903a" }}
        >
          <Grid item lg className={classes.textContainer}>
            <Typography variant="h4" paragraph style={{ color: "#000" }}>
              Review
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              Before moving any farther we come back to you with our progress.
              This gives you the freedom to discuss any changes you may want or
              any ideas you may have come up with before any heavy lifting has
              been done.
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              We give you an interactive demonstration of the mockups,
              thoroughly explaining the thought process that went into each
              screen and every anticipated feature.
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              Once you’re completely satisfied with the vision for our solution
              we get down to the nitty gritty, fine-details of design.
            </Typography>
          </Grid>
          <Grid item lg className={classes.imageContainer}>
            <img
              src={review}
              alt="magnifying glass"
              className={classes.imageProcess}
            />
          </Grid>
        </Grid>

        {/*--Design--*/}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          justifyContent={matchesMD ? "space-around" : undefined}
          className={classes.processSection}
          style={{ backgroundColor: "#a67c52" }}
        >
          <Grid item lg className={classes.textContainer}>
            <Typography variant="h4" paragraph style={{ color: "#000" }}>
              Design
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              Using the mockups and notes taken during the consultation as
              guides, we will start ironing out what the final product will look
              like. This also involves using any brand material like fonts,
              colors, and logos to extend the experience you’re already familiar
              with.
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              No aspect is superfluous, and care will be taken with every
              decision.
            </Typography>
          </Grid>
          <Grid item lg className={classes.imageContainer}>
            <img
              src={design}
              alt="handshake"
              className={classes.imageProcess}
            />
          </Grid>
        </Grid>

        {/*--Review--*/}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          className={classes.processSection}
          alignItems={matchesMD ? "center" : undefined}
          justifyContent={matchesMD ? "space-around" : undefined}
          style={{ backgroundColor: "#2d903a" }}
        >
          <Grid item lg className={classes.textContainer}>
            <Typography variant="h4" paragraph style={{ color: "#000" }}>
              Review
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              A second round of review is essential to our goal of creating
              exactly what you want, exactly how you want it.
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              This time we’ll be going over the finalized designs in another
              fully interactive demonstration. Again this gives you an
              opportunity to tweak things and make sure we get everything right
              the first time.
            </Typography>
          </Grid>
          <Grid item lg className={classes.imageContainer}>
            <img
              src={review}
              alt="magnifying glass"
              className={classes.imageProcess}
            />
          </Grid>
        </Grid>

        {/*--Build--*/}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          justifyContent={matchesMD ? "space-around" : undefined}
          className={classes.processSection}
          style={{ backgroundColor: "#df9b30" }}
        >
          <Grid item lg className={classes.textContainer}>
            <Typography variant="h4" paragraph style={{ color: "#000" }}>
              Build
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              Here’s where we get down to business.
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              Engineering begins after your approval on the final designs. We
              start by scaffolding out the project on a high level, prioritizing
              some areas over others.
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              Each area is then developed in order of importance until ready to
              be connected to the next piece.
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              Typically the backend, behind the scenes operations are completed
              first. Once all the services are in place we can then create the
              front end, user side of things.
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              Finishing the application doesn’t mean we’re done though, because
              we use extensive testing to guarantee compatibility with all
              intended devices.
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              Only after our rigorous examinations will we accept a product as
              finished, then pushing it through the production pipeline. This
              produces an optimized, compressed, consumer version of the code
              and assets ready for deployment.
            </Typography>
          </Grid>
          <Grid item lg className={classes.imageContainer}>
            <img src={build} alt="handshake" className={classes.imageProcess} />
          </Grid>
        </Grid>

        {/*--Launch--*/}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          justifyContent={matchesMD ? "space-around" : undefined}
          className={classes.processSection}
          style={{ backgroundColor: "#c1272d" }}
        >
          <Grid item lg className={classes.textContainer}>
            <Typography variant="h4" paragraph style={{ color: "#000" }}>
              Launch
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              The moment we’ve all been waiting for.
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              When construction comes to a close you’re the first one to know.
              We’ll give our final demonstration to show off your shiny new
              software in the wild so you know exactly how it will look to your
              users.
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              When you say the word, we press the button and launch your project
              out to the public. We’re there to ensure everything goes to plan
              so you can start reaping the rewards of your technological
              investment immediately.
            </Typography>
          </Grid>
          <Grid item lg className={classes.imageContainer}>
            <img
              src={launch}
              alt="handshake"
              className={classes.imageProcess}
            />
          </Grid>
        </Grid>

        {/*--Maintain--*/}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          justifyContent={matchesMD ? "space-around" : undefined}
          className={classes.processSection}
          style={{ backgroundColor: "#8e45ce" }}
        >
          <Grid item lg className={classes.textContainer}>
            <Typography variant="h4" paragraph style={{ color: "#000" }}>
              Maintain
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              Our work doesn’t end there.
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              After a successful launch we keep in close contact to listen to
              feedback and hear how the project is being received.
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              From there on out we make sure your application is kept up to date
              and taking advantage of the best features and practices available.
              When new developments arise or new techniques are discovered in
              future projects, we will implement those advancements in your
              project as part of our routine maintenance.
            </Typography>
          </Grid>
          <Grid item lg className={classes.imageContainer}>
            <img
              src={maintain}
              alt="handshake"
              className={classes.imageProcess}
            />
          </Grid>
        </Grid>

        {/*--Iterate--*/}
        <Grid
          item
          container
          direction={matchesMD ? "column" : "row"}
          alignItems={matchesMD ? "center" : undefined}
          justifyContent={matchesMD ? "space-around" : undefined}
          className={classes.processSection}
          style={{ backgroundColor: "#269acb" }}
        >
          <Grid item lg className={classes.textContainer}>
            <Typography variant="h4" paragraph style={{ color: "#000" }}>
              Iterate
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              The cycle repeats whenever you come up with a new idea for
              extending your current project, or come up with a brand new system
              entirely.
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              By planning for future features and changes we can build and
              evolve your application over time. As new use cases and customer
              needs develop we can respond with continuous integration of new
              content.
            </Typography>
            <Typography variant="body1" paragraph className={classes.text}>
              Our iterative process will keep you current and competitive,
              allowing you to quickly implement changes instead of waiting
              months for a single update.
            </Typography>
          </Grid>
          <Grid item lg className={classes.imageContainer}>
            <img
              src={iterate}
              alt="handshake"
              className={classes.imageProcess}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <CallToAction />
      </Grid>
    </Grid>
  );
};