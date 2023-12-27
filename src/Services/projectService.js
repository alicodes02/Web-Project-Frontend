const fetchBlogs = async () => {
    try {
      const response = await fetch('https://outrageous-teal-purse.cyclic.app/projects');
      const data = await response.json();

      const projectsArray = data.blogs;

      return { projects: projectsArray };
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw error;
    }
  };
  
  export default fetchBlogs;
  