import React from 'react';

/**
 * Props:
 * images: mảng chứa 6 URL ảnh theo thứ tự từ trái sang phải, trên xuống dưới
 * title: Tiêu đề (mặc định là GALLERY)
 * buttonText: Chữ trên nút
 */
export const GalleryLayout = ({
    images = [],
    title = "GALLERY",
    buttonText = "CTA BUTTON"
}: {
    images: string[];
    title?: string;
    buttonText?: string;
}) => {
    // Đảm bảo có đủ mảng ảnh để tránh lỗi render
    const safeImages = images.length >= 6 ? images : Array(6).fill('https://via.placeholder.com/400');

    return (
        <div className="w-full bg-[#f9f7f2] py-16 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

                {/* CỘT 1: Máy Slot & Cặp đôi ngồi */}
                <div className="md:col-span-3 flex flex-col gap-6">
                    <div className="overflow-hidden rounded-sm shadow-sm">
                        <img src={safeImages[0]} alt="Slot Machine" className="w-full h-[280px] object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="overflow-hidden rounded-sm shadow-sm">
                        <img src={safeImages[1]} alt="Couple Sitting" className="w-full h-[360px] object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                </div>

                {/* CỘT 2: Các cô gái & Khối tiêu đề */}
                <div className="md:col-span-3 flex flex-col gap-8">
                    <div className="overflow-hidden rounded-sm shadow-sm">
                        <img src={safeImages[2]} alt="Ladies Toasting" className="w-full h-[320px] object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    {/* Khối Text & Button */}
                    <div className="flex flex-col items-center justify-center py-10 text-center">
                        <h2 className="text-4xl font-serif tracking-widest text-gray-900 mb-6 uppercase">
                            {title}
                        </h2>
                        <button className="border border-[#b4975a] bg-[#b4975a]/80 text-white px-10 py-3 text-sm tracking-[0.2em] hover:bg-[#b4975a] transition-colors duration-300 uppercase">
                            {buttonText}
                        </button>
                    </div>
                </div>

                {/* CỘT 3: Cửa vòm & Quầy lễ tân */}
                <div className="md:col-span-3 flex flex-col gap-6">
                    <div className="overflow-hidden rounded-sm shadow-sm">
                        <img src={safeImages[3]} alt="Arch Doorway" className="w-full h-[220px] object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="overflow-hidden rounded-sm shadow-sm">
                        <img src={safeImages[4]} alt="Reception Desk" className="w-full h-[380px] object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                </div>

                {/* CỘT 4: Cặp đôi đứng (Full Height) */}
                <div className="md:col-span-3 h-full">
                    <div className="overflow-hidden rounded-sm shadow-sm h-full">
                        <img src={safeImages[5]} alt="Couple Standing" className="w-full h-full min-h-[500px] object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                </div>

            </div>
        </div>
    );
};

