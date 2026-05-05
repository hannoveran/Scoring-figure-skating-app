import { useEffect, useState } from 'react';
import Competition from '../components/Competition';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateCompetitionModal from '../components/CreateCompetitionModal';
import {
  getCompetitions,
  createCompetition,
  updateCompetition,
  deleteCompetition,
} from '../api/api';
import '../styles/Competitions.css';

function Competitions() {
  const [competitions, setCompetitions] = useState([]);
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: '',
    date: '',
    location: '',
    category: 'men_single',
    segment: 'short_program',
    status: 'upcoming',
  });

  useEffect(() => {
    const fetchCompetitions = async () => {
      try {
        const res = await getCompetitions();
        setCompetitions(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCompetitions();
  }, []);

  const handleCreate = async () => {
    try {
      if (form.id) {
        const res = await updateCompetition(form.id, form);

        setCompetitions(
          competitions.map((c) => (c.id === form.id ? res.data : c)),
        );
      } else {
        const res = await createCompetition(form);

        setCompetitions([res.data, ...competitions]);
      }

      setForm({
        name: '',
        date: '',
        location: '',
        category: 'men_single',
        segment: 'short_program',
        status: 'upcoming',
      });

      setOpen(false);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this competition?')) return;

    try {
      await deleteCompetition(id);
      setCompetitions(competitions.filter((c) => c.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (comp) => {
    setForm({
      id: comp.id,
      name: comp.name || '',
      date: comp.date?.slice(0, 10) || '',
      location: comp.location || '',
      category: comp.category || 'men_single',
      segment: comp.segment || 'short_program',
      status: comp.status || 'upcoming',
    });

    setOpen(true);
  };

  const filtered = competitions.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="competition-page">
      <Header />

      <main>
        <div className="competitions-header">
          <div>
            <h1>Competitions</h1>
            <p>Manage skating events</p>
          </div>

          <button
            className="btn-primary shadow-md"
            onClick={() => setOpen(true)}
          >
            + New Competition
          </button>
        </div>

        <input
          className="search-input shadow-sm"
          placeholder="Search competitions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="competitions">
          {filtered.map((comp) => (
            <Competition
              key={comp.id}
              comp={comp}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>
      </main>

      <CreateCompetitionModal
        open={open}
        onClose={() => setOpen(false)}
        onCreate={handleCreate}
        form={form}
        setForm={setForm}
      />

      <Footer />
    </div>
  );
}

export default Competitions;
