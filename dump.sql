--
-- PostgreSQL database dump
--

-- Dumped from database version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.6 (Ubuntu 14.6-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: sessions; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.sessions (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    token text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: sessions_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.sessions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: sessions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.sessions_id_seq OWNED BY public.sessions.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "userId" integer NOT NULL,
    "shortUrl" text NOT NULL,
    url text NOT NULL,
    "visitCount" integer NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now() NOT NULL
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp without time zone DEFAULT now()
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: sessions id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions ALTER COLUMN id SET DEFAULT nextval('public.sessions_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.sessions VALUES (1, 4, 'd45f1171-2517-4c35-9645-49857f672d9c', '2023-03-02 11:03:45.448106');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (1, 4, '45FwF2nex9', 'data:image/jpeg;base64,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', 2, '2023-02-28 12:05:57.996889');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Jefferson', 'jeff@email.com', '123456', '2023-02-28 12:36:58.060197');
INSERT INTO public.users VALUES (2, 'Armando', 'arm@email.com', '123456', '2023-02-28 12:36:58.060197');
INSERT INTO public.users VALUES (4, 'Bento', 'bento@email.com', '$2b$10$.H1nSEo846w0kZE/DJZLGOcE.3VRwcoepqdHlKHnjsE5m23EvTAyG', '2023-02-28 12:36:58.060197');


--
-- Name: sessions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.sessions_id_seq', 1, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 1, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 4, true);


--
-- Name: sessions sessions_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT sessions_pkey PRIMARY KEY (id);


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sessions sessions_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

