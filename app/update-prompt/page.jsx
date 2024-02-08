"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

import Form from "@components/Form";

const UpdatePrompt = () => {
  const router = useRouter();
  const [post, setPost] = useState({ prompt: "", tag: "" });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getPromptDetails = async () => {
      try {
        const searchParams = useSearchParams(); // Move useSearchParams outside useEffect
        const promptId = searchParams.get("id");

        if (!promptId) {
          throw new Error("Missing PromptId!");
        }

        const response = await fetch(`/api/prompt/${promptId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch prompt details");
        }

        const data = await response.json();
        setPost({
          prompt: data.prompt,
          tag: data.tag,
        });
      } catch (error) {
        console.error(error);
      }
    };

    getPromptDetails();
  }, []);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to update prompt");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Form
        type="Edit"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={updatePrompt}
      />
    </Suspense>
  );
};

export default UpdatePrompt;
