"use client";

import { useEffect, useState } from "react";

const pageId = process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID;
const accessToken = process.env.NEXT_PUBLIC_FACEBOOK_ACCESS_TOKEN;

export default function FacebookPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          `https://graph.facebook.com/v22.0/${pageId}/feed?fields=id,permalink_url,message,created_time,story,is_published,attachments{media_type,media,url,title,description},full_picture&access_token=${accessToken}&limit=4`
        );
        const data = await response.json();
        if (data.data) {
          console.log(data.data);
          setPosts(data.data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }

    fetchPosts();
  }, []);

  return (
    <section id="facebook-posts" className="py-20 bg-gray-100">
      <div className="flex flex-wrap justify-center gap-8">
        {posts.length > 0 ? (
          posts.map((post, index) => (
            <div key={index} className="w-96 bg-white rounded-lg shadow-lg p-4">
              {/* Post Image */}
              {post.full_picture && (
                <img
                  src={post.full_picture}
                  alt="Facebook Post"
                  className="w-full h-56 object-cover rounded-lg"
                />
              )}

              {/* Post Content */}
              <div className="mt-4">
                {post.story && <h3 className="text-lg font-semibold">{post.story}</h3>}
                {post.message && <p className="text-gray-700 mt-2">{post.message}</p>}
              </div>

              {/* Display Attachments */}
              {post.attachments?.data.map((attachment, idx) => (
                <div key={idx} className="mt-4">
                  {(attachment.media_type === "photo") && (<>
                    {post.full_picture != attachment.media?.image?.src && <img
                      src={attachment.media?.image?.src || attachment.media?.url}
                      alt={attachment.title || "Attachment"}
                      className="w-full h-40 object-cover rounded-lg"
                    />}
                    {attachment.description}</>
                  )}
                </div>
            
              ))}

              {/* Read More Link */}
              <a
                href={post.permalink_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-blue-500 font-bold"
              >
                Read More →
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No posts available.</p>
        )}
      </div>
    </section>
  );
}
