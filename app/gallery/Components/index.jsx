import Image from "next/image";

const tableData = [
  [
    { src: "/dummy.png", alt: "img1", colSpan: 2 },
    { src: "/dummy.png", alt: "img2" },
    { src: "/dummy.png", alt: "img3" },
  ],
  [
    { src: "/dummy.png", alt: "img4" },
    { src: "/dummy.png", alt: "img5" },
    { src: "/dummy.png", alt: "img6", colSpan: 2 },
  ],
  [
    { src: "/dummy.png", alt: "img1", colSpan: 2 },
    { src: "/dummy.png", alt: "img2" },
    { src: "/dummy.png", alt: "img3" },
  ],
];

const flatImages = tableData.flat();

const ImageDisplay = () => {
  return (
    <>
      <table className="w-full border-0 border-spacing-1 mx-auto hidden md:table overflow-hidden">
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((item, i) => (
                <td key={i} colSpan={item.colSpan || 1} data-aos="fade-up">
                  <Image
                    width={300}
                    height={200}
                    className="w-full h-72 object-cover object-center"
                    src={item.src}
                    alt={item.alt}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="grid grid-cols-2 gap-2 p-1 md:hidden">
        {flatImages.map((img, i) => (
          <div key={i} data-aos="fade-up">
            <Image
              width={300}
              height={200}
              className="w-full h-72 object-cover object-center"
              src={img.src}
              alt={img.alt}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageDisplay;
