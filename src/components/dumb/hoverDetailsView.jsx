function HoverDetailsView({
  cardData,
  scrollRef,
  hoveredIndex,
  setHoveredIndex,
}) {
  return (
    <div
      className="bg-[#131716] py-8 overflow-x-auto hide-scrollbar relative"
      ref={scrollRef}
    >
      <div className="flex flex-nowrap gap-8 px-4 min-w-max">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="w-[250px] h-[350px] flex-shrink-0 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="h-full bg-[#262626] rounded-xl p-4">
              {hoveredIndex === index ? (
                <h2 className="text-white">{card.description}</h2>
              ) : (
                <>
                  <h2 className="text-white font-semibold text-2xl mb-2">
                    {card.title}
                  </h2>
                  <img src={card.image} />
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HoverDetailsView;
