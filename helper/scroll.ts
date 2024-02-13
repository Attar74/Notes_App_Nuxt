const scrollTo = (value: number) => {
  window.scrollTo({ top: value, behavior: 'smooth' });
};

const smoothScroll = (id: string) => {
  console.log("🚀 ~ smoothScroll ~ id:", id)
  const input = document.querySelector(`.note-li`);
	console.log("🚀 ~ smoothScroll ~ input:", input)
  if (input != null) {
    input.scrollIntoView({
      behavior: 'smooth',
    });
  }
};

export { scrollTo, smoothScroll };
