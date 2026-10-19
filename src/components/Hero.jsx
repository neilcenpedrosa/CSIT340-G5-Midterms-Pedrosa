export default function Hero({ stars, setStars, downloads, setDownloads, issues, setIssues }) {
  const handleStar = () => setStars(stars + 1);
  const handleDownload = () => setDownloads(downloads + 1);
  const handleReport = () => setIssues(issues + 1);
  const handleReset = () => {
    setStars(0);
    setDownloads(0);
    setIssues(0);
  };
    
  return (
<div className="flex justify-center gap-4 py-6">
        <button
          className="cursor-pointer rounded-lg bg-[#800020] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={handleStar}
        >
          Star
        </button>
        <button
          className="cursor-pointer rounded-lg bg-[#D45060] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={handleDownload}
        >
          Download
        </button>
        <button
          className="cursor-pointer rounded-lg bg-[#000000] px-8 py-3 text-xl font-bold text-[#FFF9F2]"
          onClick={handleReport}
        >
          Report issue
        </button>
        <button
          className="cursor-pointer rounded-lg border border-[#800020] px-8 py-3 text-xl font-bold"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    );
}