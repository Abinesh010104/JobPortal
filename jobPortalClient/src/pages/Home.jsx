import { useEffect, useState } from "react";
import Banner from "../components/Home Page/Banner";
import { useJobContext } from "../context/JobContext";
import LoadingComTwo from "../components/shared/LoadingComTwo";
import JobCard from "../components/AllJobsPage/JobCard";
import Navbar from "../components/shared/Navbar";
import axios from "axios";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [jobLoading, setJobLoading] = useState(true);
  const [jobError, setJobError] = useState({ status: false, message: "" });
  const [jobs, setJobs] = useState({});
  const itemsPerPage = 6;

  const handleJobFetch = async (url) => {
    setJobLoading(true);
    try {
      const response = await axios.get(url, { withCredentials: true });
      setJobError({ status: false, message: "" });
      setJobs(response?.data);
    } catch (error) {
      setJobError({ status: true, message: error?.message });
      setJobs({ status: false });
      setJobLoading(false);
    }
    setJobLoading(false);
  };

  useEffect(() => {
    handleJobFetch(`https://abinesh-job-portal-server.vercel.app/api/v1/jobs`);
  }, []);

  if (jobLoading) {
    return <LoadingComTwo />;
  }

  if (!jobs?.result?.length) {
    return (
      <h2 className="text-lg md:text-3xl text-center font-bold mt-24 text-red-600">
        No Job Found
      </h2>
    );
  }

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  // Filter jobs by query and location
  const filteredItems = jobs.result.filter((job) => {
    const matchesQuery = job.position
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesLocation = job.jobLocation
      .toLowerCase()
      .includes(location.toLowerCase());
    return matchesQuery && matchesLocation;
  });

  // Calculate the index range for pagination
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return { startIndex, endIndex };
  };

  // Function for the next page
  const nextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Function for the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Main function
  const { startIndex, endIndex } = calculatePageRange();
  const paginatedJobs = filteredItems.slice(startIndex, endIndex);
  const totalPage = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div>
      <Navbar />
      <Banner
        query={query}
        location={location}
        handleInputChange={handleInputChange}
        handleLocationChange={handleLocationChange}
      />
      {/* main content */}
      <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
        {/* job cards */}
        <div className="col-span-4 bg-white p-4 rounded-sm">
          <h3 className="text-lg font-bold mb-4">
            {filteredItems.length} Job{filteredItems.length !== 1 && "s"} Found
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedJobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
          {/* pagination */}
          {filteredItems.length > itemsPerPage && (
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded ${
                  currentPage === 1
                    ? "bg-gray-200"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Previous
              </button>
              <span className="self-center">
                Page {currentPage} of {totalPage}
              </span>
              <button
                onClick={nextPage}
                disabled={currentPage === totalPage}
                className={`px-4 py-2 rounded ${
                  currentPage === totalPage
                    ? "bg-gray-200"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
