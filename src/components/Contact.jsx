import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import contact from '../assets/contact.jpg'
import { contactSchema } from '../validations/ContactValidation';
import { useFormik } from 'formik';
import { EmailIcon, CheckIcon, WarningIcon } from '@chakra-ui/icons';

import {
  Button,
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  useToast,
  Textarea,
  Text,
} from '@chakra-ui/react';

const Contact = () => {
  const toast = useToast();
  const [submitted, setSubmitted] = useState('notSubmitted');
  const [style, setStyle] = useState(
    'w-full shadow-custom2 hover:shadow-[#67E8F9] shadow-[#ffffff] p-4 justify-center flex flex-col mx-auto'
  );


  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_email: '',
      user_phone: '',
      user_subject: '',
      message: '',
    },
    validationSchema: contactSchema,
    onSubmit: (values, actions) => {
      setSubmitted('loading');
      emailjs
        .send(
          'service_h4pebiy',
          'template_osdth1z',
          values,
          'yOktMpYjYqpxLX_TI'
        )
        .then(
          () => {
            toast({
              title: 'Message Sent.',
              description: 'Thank you, I will contact you back.',
              status: 'success',
              isClosable: true,
            });
            setSubmitted('submitted');
            setStyle(
              'w-full shadow-custom2 shadow-[#67E8F9] p-4 justify-center flex flex-col mx-auto'
            );
            actions.resetForm();
          },
          (error) => {
            toast({
              title: 'Error.',
              description: 'Something went wrong, please try again.',
              status: 'error',
              isClosable: true,
            });
            setSubmitted('error');
          }
        );
    },
  });

  const renderButton = () => {
    switch (submitted) {
      case 'submitted':
        return (
          <Button
            leftIcon={<CheckIcon />}
            color="#60f073"
            variant="none"
            className="flex cursor-default flex-center text-xl text-center m-auto ease-in duration-100 "
            size="lg"
          >
            Submitted
          </Button>
        );
      case 'notSubmitted':
        return (
          <Button
            leftIcon={<EmailIcon />}
            color="#ffffff"
            variant="outline"
            className="flex flex-center text-xl text-center m-auto hover:text-[#67E8F9] ease-in duration-100 "
            loadingText="Sending"
            onClick={formik.handleSubmit}
            size="lg"
          >
            Send Message
          </Button>
        );
      case 'loading':
        return (
          <Button
            leftIcon={<EmailIcon />}
            color="#ffffff"
            variant="outline"
            className="flex flex-center cursor-default text-xl text-center m-auto ease-in duration-100 "
            isLoading
            loadingText="Sending"
            size="lg"
          >
            Send Message
          </Button>
        );
      case 'error':
        return (
          <Button
            leftIcon={<WarningIcon />}
            color="red.300"
            variant="outline"
            className="flex flex-center text-xl text-center m-auto ease-in duration-100 "
            onClick={formik.handleSubmit}
            size="lg"
          >
            Error: Send Again
          </Button>
        );
      default:
        return null;
    }
  };


  //TODO: make inputs unchangeable on submit, maybe change input style, change project display

  return (
    <div
      id="contact"
      className="w-[90%] m-auto md:h-screen pt-4 mt-32 mb-16 lg:mb-16 xl:mb-16"
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full flex flex-col justify-center h-full">
        <p
          id="contact-start"
          className="text-xl tracking-widest uppercase text-[#67E8F9]"
          data-aos="fade-right"
          data-aos-anchor="#contact"
        >
          Contact
        </p>
        <h2
          className="py-4 mb-4"
          data-aos="fade-right"
          data-aos-anchor="#contact"
        >
          How To Get In Touch
        </h2>
        <div className="" data-aos="fade-in" data-aos-anchor="#contact">
          <div className={style}>
            <div className="lg:p-4 h-full ">
              <div className=" flex flex-row justify-between">
                <div className="">
                  <h2 className="pb-2" id="contact-name">
                    João Correia
                  </h2>
                  <p>Full Stack Developer</p>
                  <p className="mt-8">
                    Available for freelance or full-time positions.
                  </p>
                  <p>Contact me so we can talk.</p>
                </div>
                <div className="hidden lg:block w-[300px]">
                  <img
                    className="animated-image rounded-xl hover:scale-105 ease-in duration-300"
                    src={contact}
                    alt=""
                  />
                </div>
              </div>
              <div>
                <div className="col-span-3 w-full h-auto">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-8 w-full py-4">
                      <FormControl
                        isInvalid={
                          formik.errors.user_name && formik.touched.user_name
                        }
                        className="flex flex-col"
                      >
                        <FormLabel className="pt-2">
                          <div className="flex flex-row justify-start m-auto items-center">
                            <Text className="uppercase text-sm font-normal mt-2">
                              Name
                            </Text>
                            <FormErrorMessage className="ml-2 font-normal">
                              {formik.errors.user_name}
                            </FormErrorMessage>
                          </div>
                        </FormLabel>
                        <Input
                          className=""
                          type="text"
                          name="user_name"
                          id="name_input"
                          focusBorderColor="#67E8F9"
                          variant="flushed"
                          placeholder="Your Name"
                          _placeholder={{ color: 'gray.100', opacity: 0.3 }}
                          errorBorderColor="red"
                          {...formik.getFieldProps('user_name')}
                        />
                      </FormControl>

                      <FormControl
                        className="flex flex-col"
                        isInvalid={
                          formik.errors.user_phone && formik.touched.user_phone
                        }
                      >
                        <FormLabel className="pt-2">
                          <div className="flex flex-row justify-start m-auto items-center">
                            <Text className="uppercase text-sm font-normal mt-2">
                              Phone Number
                            </Text>
                            <FormErrorMessage className="ml-2 font-normal">
                              {formik.errors.user_phone}
                            </FormErrorMessage>
                          </div>
                        </FormLabel>
                        <Input
                          className=""
                          type="text"
                          name="user_phone"
                          id="phone_input"
                          variant="flushed"
                          placeholder="Your Phone Number"
                          _placeholder={{ color: 'gray.100', opacity: 0.3 }}
                          errorBorderColor="red"
                          focusBorderColor="#67E8F9"
                          {...formik.getFieldProps('user_phone')}
                        />
                      </FormControl>
                    </div>

                    <FormControl
                      isInvalid={
                        formik.errors.user_email && formik.touched.user_email
                      }
                      className="flex flex-col py-4"
                    >
                      <FormLabel className="pt-2">
                        <div className="flex flex-row justify-start m-auto items-center">
                          <Text className="uppercase text-sm font-normal mt-2">
                            Email
                          </Text>
                          <FormErrorMessage className="ml-2 font-normal">
                            {formik.errors.user_email}
                          </FormErrorMessage>
                        </div>
                      </FormLabel>
                      <Input
                        className=""
                        type="email"
                        variant="flushed"
                        name="user_email"
                        id="email_input"
                        errorBorderColor="red"
                        focusBorderColor="#67E8F9"
                        placeholder="Your Email"
                        _placeholder={{ color: 'gray.100', opacity: 0.3 }}
                        {...formik.getFieldProps('user_email')}
                      />
                    </FormControl>

                    <FormControl
                      isInvalid={
                        formik.errors.user_subject &&
                        formik.touched.user_subject
                      }
                      className="flex flex-col py-4"
                    >
                      <FormLabel className="uppercase text-sm pt-4 font-light">
                        <Text className="uppercase text-sm font-normal">
                          Subject
                        </Text>
                      </FormLabel>
                      <Input
                        className=""
                        type="text"
                        name="user_subject"
                        id="subject_input"
                        errorBorderColor="red"
                        variant="flushed"
                        focusBorderColor="#67E8F9"
                        placeholder="Subject"
                        _placeholder={{ color: 'gray.100', opacity: 0.3 }}
                        {...formik.getFieldProps('user_subject')}
                      />
                    </FormControl>

                    <FormControl
                      isInvalid={
                        formik.errors.message && formik.touched.message
                      }
                      className="flex flex-col pt-4"
                    >
                      <FormLabel className="pt-2">
                        <div className="flex flex-row justify-start m-auto items-center">
                          <Text className="uppercase text-sm font-normal mt-2">
                            Message
                          </Text>
                          <FormErrorMessage className="ml-2 font-normal">
                            {formik.errors.message}
                          </FormErrorMessage>
                        </div>
                      </FormLabel>
                      <Textarea
                        className=""
                        rows="6"
                        name="message"
                        variant="flushed"
                        id="message_input"
                        errorBorderColor="red"
                        focusBorderColor="#67E8F9"
                        placeholder="Message"
                        _placeholder={{ color: 'gray.100', opacity: 0.3 }}
                        {...formik.getFieldProps('message')}
                      />
                    </FormControl>

                    <div className="flex flex-row w-[95%] m-auto mt-6 mb-3 md:mb-0">
                      {renderButton()}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact