import Head from "next/head";
import RegistrationForm from "./login"
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Link from 'next/link'



type ConnectionStatus = {
  isConnected: boolean;
};

export default function Home({
}) {
  return (
      <RegistrationForm/>
  );
}
