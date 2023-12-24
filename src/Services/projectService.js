const fetchBlogs = async () => {
    try {
      const response = await fetch('http://localhost:3001/projects');
      const data = await response.json();

      const projectsArray = data.blogs;

      return { projects: projectsArray };
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  };
  
  export default fetchBlogs;
  