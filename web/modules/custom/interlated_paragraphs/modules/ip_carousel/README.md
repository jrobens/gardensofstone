# Interlated Bulma Carousel

Implementation pattern

- Paragraph type carousel
- Paragraph type carousel item
- Carousel has a reference field to add carousel items

Alternatives rejected including using paragraph layout, node blocks.


Remove this

* content type carousel
* Paragraph  carousel within
* Node block and map block.


Starter template for hero carousel

`<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Hello Bulma!</title>
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css">
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.3/dist/css/bulma-carousel.min.css">
	</head>
	<body>
		<!-- Start Hero Carousel -->
		<section class="hero is-medium has-carousel">
			<div id="carousel-demo" class="hero-carousel">
				<div class="item-1">
					<!-- Slide Content -->
				</div>
				<div class="item-2">
					<!-- Slide Content -->
				</div>
				<div class="item-3">
					<!-- Slide Content -->
				</div>
			</div>
			<div class="hero-head"></div>
			<div class="hero-body"></div>
			<div class="hero-foot"></div>
		</section>
		<!-- End Hero Carousel -->

		<script src="https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.3/dist/js/bulma-carousel.min.js"></script>
		<script>
			bulmaCarousel.attach('#carousel-demo', {
				slidesToScroll: 1,
				slidesToShow: 4
			});
		</script>
	</body>
</html>
`
