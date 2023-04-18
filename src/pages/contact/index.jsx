import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Image, TextInput, Textarea, Title } from "@mantine/core";

import { ContactBox, SImage, Wrapper } from "./style";
import { schema } from "../../schema";

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    return alert(JSON.stringify(data));
  };

  return (
    <Wrapper id="contact">
      <SImage>
        <Image
          width={400}
          height={500}
          radius="md"
          src="https://content.techgig.com/photo/78949110/9-Best-programming-project-ideas-for-beginners-to-level-up-their-coding-skills.jpg"
          alt="loading..."
        />
      </SImage>
      <ContactBox onSubmit={handleSubmit(onSubmit)}>
        <Title color="blue" size={40}>
          Contact Me
        </Title>
        <TextInput
          {...register("firstname")}
          placeholder="your name"
          label="Firstname"
          error={errors.firstname?.message}
        />
        <TextInput
          {...register("lastname")}
          placeholder="your lastname"
          label="Lastname"
          error={errors.lastname?.message}
        />
        <TextInput
          {...register("email")}
          placeholder="example@gmail.com"
          label="Email"
          error={errors.email?.message}
        />
        <Textarea
          {...register("message")}
          placeholder="your message"
          label="Message"
          error={errors.message?.message}
        />
        <Button type="submit">Send Message</Button>
      </ContactBox>
    </Wrapper>
  );
};

export default ContactPage;
