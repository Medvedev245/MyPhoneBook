import { Suspense, useEffect, useRef } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactById } from 'components/Redux/selectors';
import { getContactById, removeContact } from 'components/Redux/thunk';
import { Link } from 'react-router-dom';

const ContactDetails = () => {
  const location = useLocation();
  const { id } = useParams();

  const currentContact = useSelector(selectContactById);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactById(id));
  }, [dispatch, id]);

  const navigate = useNavigate();

  const backLinkLocation = useRef(location.state?.from ?? '/');

  const handleDelete = () => {
    const isConfirmed = window.confirm('Delete contact?');

    if (isConfirmed) {
      dispatch(removeContact(id));
      navigate('/');
    }
  };

  const handleContactEdit = () => {
    navigate(`edit`, { state: { from: location } });
  };

  if (!currentContact) {
    return (
      <div
        style={{
          display: 'flex',
          marginTop: '100px',
        }}
      >
        <div style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
      </div>
    );
  }

  return (
    <>
      <div>
        <div>
          <div>
            <Link to={backLinkLocation.current}></Link>
          </div>
          <div>
            <h2>{currentContact.name}</h2>
          </div>
        </div>

        <div>
          <div type="button" onClick={() => handleContactEdit()}>
            <button>Edit</button>
          </div>

          <div>
            <button typeof="button" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: '20px', marginBottom: '40px' }} />

      <div>
        <Suspense
          fallback={
            <div
              style={{
                display: 'flex',
                marginTop: '100px',
              }}
            >
              <div style={{ marginLeft: 'auto', marginRight: 'auto' }}></div>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default ContactDetails;
