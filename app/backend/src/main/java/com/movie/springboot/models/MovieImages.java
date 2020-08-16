package com.movie.springboot.models;

public class MovieImages {

	private ImageUrl[] hdmovielogo;
	private ImageUrl[] hdmovieclearart;
	private ImageUrl[] movieposter;
	private ImageUrl[] moviebanner;
	private ImageUrl[] moviethumb;
	private ImageUrl[] moviedisc;
	
	
	public ImageUrl[] getMoviebanner() {
		return moviebanner;
	}
	public void setMoviebanner(ImageUrl[] moviebanner) {
		this.moviebanner = moviebanner;
	}
	public ImageUrl[] getMoviethumb() {
		return moviethumb;
	}
	public void setMoviethumb(ImageUrl[] moviethumb) {
		this.moviethumb = moviethumb;
	}
	public ImageUrl[] getMoviedisc() {
		return moviedisc;
	}
	public void setMoviedisc(ImageUrl[] moviedisc) {
		this.moviedisc = moviedisc;
	}
	public ImageUrl[] getHdmovielogo() {
		return hdmovielogo;
	}
	public void setHdmovielogo(ImageUrl[] hdmovielogo) {
		this.hdmovielogo = hdmovielogo;
	}
	public ImageUrl[] getHdmovieclearart() {
		return hdmovieclearart;
	}
	public void setHdmovieclearart(ImageUrl[] hdmovieclearart) {
		this.hdmovieclearart = hdmovieclearart;
	}
	public ImageUrl[] getMovieposter() {
		return movieposter;
	}
	public void setMovieposter(ImageUrl[] movieposter) {
		this.movieposter = movieposter;
	}
	
}

