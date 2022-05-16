import React from "react";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { Data } from "../models/model";

type Props = {
  data: Data;
};

export default function index({ data }: Props) {
  const { results } = data;
  return (
    <div>
      <h1>Typescript with NextJs</h1>
      <ul>
        {results.map((item, index) => (
          <li key={index}>
            <div>
              {item.name.first} <br />
              <span>{item.location.city}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const url = "https://randomuser.me/api/";
  const res = await fetch(url);
  const result = await res.json();
  const data: Data = result;
  return {
    props: {
      data,
    },
  };
};
