import React from "react";


import UsePosts from "../Hook/UsePosts";
import { SimpleGrid, Box, Button, Text } from "@chakra-ui/react";


export default function PostsList({ setPostId }) {

    const { status, data, error, isFetching } = UsePosts();
    console.log(data);

    return (
        <div>
            <h1>Posts</h1>
            <div>
                {status === "loading" ? (
                    "Loading..."
                ) : status === "error" ? (
                    <span>Error: {error.message}</span>
                ) : (
                    <>
                        <div>
                            <SimpleGrid minChildWidth='300px' spacing='50px'>

                                {data.map((post) => (
                                    <Box bg='#bbb8b8' height='200px'  >
                                        <Text color='black' >
                                            {post.title}
                                        </Text>

                                        <Button colorScheme='teal' variant='ghost' onClick={() => setPostId(post.id)}>
                                            view details
                                        </Button>

                                    </Box>
                                ))}



                            </SimpleGrid>
                        </div>
                        <div>{isFetching ? "Background Updating..." : " "}</div>
                    </>
                )}
            </div>
        </div>
    );
}