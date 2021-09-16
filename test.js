router.post('/books/edit/:id', (req, res, next) => {
	const bookId = req.params.id;
	// const { title, author, description, rating } = req.body;
	const titleFromInput = req.body.title;
	const descriptionFromInput = req.body.description;
	const authorFromInput = req.body.author;
	const ratingFromInput = req.body.rating;

	// if findByIdAndUpdate() should return the updated book -> add {new: true}
	Book.findByIdAndUpdate(bookId, {
		title: titleFromInput,
		description: descriptionFromInput,
		author: authorFromInput,
		rating: ratingFromInput
	}, { new: true })
		.then(updatedBook => {
			console.log(updatedBook);
			// redirect to the details route
			res.redirect(`/books/${updatedBook._id}`);
		})
		.catch(err => {
			next(err);
		})
});