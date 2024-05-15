import { useContext, useEffect, useState } from "react";
import AllBlogHome from "./AllBlogHome";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Firbease/FirebaseProvider";
import { motion, AnimatePresence } from "framer-motion";

const AllBlogsHome = () => {
  const { user } = useContext(AuthContext) || {};
  const { data: blogs } = useQuery({
    queryKey: ['usersHome'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5004/addblogs');
      return res.json();
    }
  });

  return (
    <div className="space-y-5">
      <motion.div
        initial={{ opacity: 0}}
        animate={{ opacity: 0, y: 1 }}
        transition={{ duration: 1 }}
        className="md:flex"
      >
        <h1 className="text-center md:text-4xl text-xl font-bold text-green-700"> Explore the World of Ideas: AllBlogs</h1>
      </motion.div>

      <p className="text-center md:text-3xl font-extralight text-xl text-gray-700">Step into our AllBlogs section, where a tapestry of perspectives, ideas, and expertise awaits.  </p>

      <div className="md:grid md:grid-cols-2 md:gap-4 grid grid-cols-1 gap-4">
        <AnimatePresence>
          {blogs?.slice(0, 6)?.map((blog, index) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <AllBlogHome blog={blog} email={user?.email} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AllBlogsHome;