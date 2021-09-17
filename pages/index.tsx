import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import useSwr from "swr";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

type Workout = {
  date: Date;
  steps: Array<Step>;
};

type Step = {
  order: string;
  value: string;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Home: NextPage = () => {
  const { data, error } = useSwr("/api/workouts", fetcher);

  return (
    <div className={styles.container}>
      <Head>
        <title>Workout Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Paper className={styles.paper}>
          <Grid container spacing={2}>
            {data?.map((workout: Workout, index: number) => (
              <Grid key={index} item xs={12}>
                <Card variant="outlined" elevation={3}>
                  <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                      {new Date(workout.date).toDateString()}
                    </Typography>
                    <Typography variant="h5" component="h2"></Typography>
                    <Typography color="textSecondary">adjective</Typography>
                    <Typography variant="body2" component="p">
                      well meaning and kindly.
                      <br />
                      {'"a benevolent smile"'}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </main>
    </div>
  );
};

export default Home;
